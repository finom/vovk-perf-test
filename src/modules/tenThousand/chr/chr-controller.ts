import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chr")
export default class ChrController {
  @operation({
    summary: "Get Chr",
  })
  @get()
  static getChr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Chr",
  })
  @post("{id}")
  static createChr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

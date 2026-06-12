import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqt")
export default class CqtController {
  @operation({
    summary: "Get Cqt",
  })
  @get()
  static getCqt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cqt",
  })
  @post("{id}")
  static createCqt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

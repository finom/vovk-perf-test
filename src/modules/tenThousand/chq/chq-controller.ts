import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chq")
export default class ChqController {
  @operation({
    summary: "Get Chq",
  })
  @get()
  static getChq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Chq",
  })
  @post("{id}")
  static createChq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

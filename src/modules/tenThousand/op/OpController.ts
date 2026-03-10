import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("op")
export default class OpController {
  @operation({
    summary: "Get Op",
  })
  @get()
  static getOp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Op",
  })
  @post("{id}")
  static createOp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

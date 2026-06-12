import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ct")
export default class CtController {
  @operation({
    summary: "Get Ct",
  })
  @get()
  static getCt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ct",
  })
  @post("{id}")
  static createCt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

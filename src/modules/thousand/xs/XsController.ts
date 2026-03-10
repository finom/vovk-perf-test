import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xs")
export default class XsController {
  @operation({
    summary: "Get Xs",
  })
  @get()
  static getXs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Xs",
  })
  @post("{id}")
  static createXs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

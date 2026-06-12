import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xd")
export default class XdController {
  @operation({
    summary: "Get Xd",
  })
  @get()
  static getXd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Xd",
  })
  @post("{id}")
  static createXd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

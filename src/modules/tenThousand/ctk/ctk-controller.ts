import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ctk")
export default class CtkController {
  @operation({
    summary: "Get Ctk",
  })
  @get()
  static getCtk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ctk",
  })
  @post("{id}")
  static createCtk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

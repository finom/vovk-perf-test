import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixk")
export default class IxkController {
  @operation({
    summary: "Get Ixk",
  })
  @get()
  static getIxk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ixk",
  })
  @post("{id}")
  static createIxk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhk")
export default class JhkController {
  @operation({
    summary: "Get Jhk",
  })
  @get()
  static getJhk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jhk",
  })
  @post("{id}")
  static createJhk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

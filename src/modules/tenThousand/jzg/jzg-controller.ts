import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzg")
export default class JzgController {
  @operation({
    summary: "Get Jzg",
  })
  @get()
  static getJzg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jzg",
  })
  @post("{id}")
  static createJzg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jtk")
export default class JtkController {
  @operation({
    summary: "Get Jtk",
  })
  @get()
  static getJtk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jtk",
  })
  @post("{id}")
  static createJtk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

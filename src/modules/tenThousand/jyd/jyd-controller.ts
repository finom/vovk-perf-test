import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyd")
export default class JydController {
  @operation({
    summary: "Get Jyd",
  })
  @get()
  static getJyd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jyd",
  })
  @post("{id}")
  static createJyd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jnt")
export default class JntController {
  @operation({
    summary: "Get Jnt",
  })
  @get()
  static getJnt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jnt",
  })
  @post("{id}")
  static createJnt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

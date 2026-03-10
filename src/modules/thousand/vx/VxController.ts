import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vx")
export default class VxController {
  @operation({
    summary: "Get Vx",
  })
  @get()
  static getVx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Vx",
  })
  @post("{id}")
  static createVx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

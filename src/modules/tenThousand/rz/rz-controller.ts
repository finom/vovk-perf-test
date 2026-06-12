import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rz")
export default class RzController {
  @operation({
    summary: "Get Rz",
  })
  @get()
  static getRz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Rz",
  })
  @post("{id}")
  static createRz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

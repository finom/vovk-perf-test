import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ry")
export default class RyController {
  @operation({
    summary: "Get Ry",
  })
  @get()
  static getRy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ry",
  })
  @post("{id}")
  static createRy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

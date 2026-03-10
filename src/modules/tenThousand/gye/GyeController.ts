import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gye")
export default class GyeController {
  @operation({
    summary: "Get Gye",
  })
  @get()
  static getGye = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gye",
  })
  @post("{id}")
  static createGye = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

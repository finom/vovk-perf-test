import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("blx")
export default class BlxController {
  @operation({
    summary: "Get Blx",
  })
  @get()
  static getBlx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Blx",
  })
  @post("{id}")
  static createBlx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgi")
export default class MgiController {
  @operation({
    summary: "Get Mgi",
  })
  @get()
  static getMgi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mgi",
  })
  @post("{id}")
  static createMgi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

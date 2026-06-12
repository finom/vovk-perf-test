import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mri")
export default class MriController {
  @operation({
    summary: "Get Mri",
  })
  @get()
  static getMri = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mri",
  })
  @post("{id}")
  static createMri = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

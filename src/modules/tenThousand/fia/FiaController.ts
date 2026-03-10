import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fia")
export default class FiaController {
  @operation({
    summary: "Get Fia",
  })
  @get()
  static getFia = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fia",
  })
  @post("{id}")
  static createFia = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

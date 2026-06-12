import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhe")
export default class MheController {
  @operation({
    summary: "Get Mhe",
  })
  @get()
  static getMhe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mhe",
  })
  @post("{id}")
  static createMhe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmv")
export default class DmvController {
  @operation({
    summary: "Get Dmv",
  })
  @get()
  static getDmv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dmv",
  })
  @post("{id}")
  static createDmv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

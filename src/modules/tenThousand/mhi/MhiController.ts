import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhi")
export default class MhiController {
  @operation({
    summary: "Get Mhi",
  })
  @get()
  static getMhi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mhi",
  })
  @post("{id}")
  static createMhi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

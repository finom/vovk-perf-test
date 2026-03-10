import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mei")
export default class MeiController {
  @operation({
    summary: "Get Mei",
  })
  @get()
  static getMei = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mei",
  })
  @post("{id}")
  static createMei = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

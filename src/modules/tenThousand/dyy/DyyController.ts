import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyy")
export default class DyyController {
  @operation({
    summary: "Get Dyy",
  })
  @get()
  static getDyy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dyy",
  })
  @post("{id}")
  static createDyy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

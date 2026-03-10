import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyc")
export default class DycController {
  @operation({
    summary: "Get Dyc",
  })
  @get()
  static getDyc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dyc",
  })
  @post("{id}")
  static createDyc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

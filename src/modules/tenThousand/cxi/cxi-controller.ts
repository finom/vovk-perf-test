import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxi")
export default class CxiController {
  @operation({
    summary: "Get Cxi",
  })
  @get()
  static getCxi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cxi",
  })
  @post("{id}")
  static createCxi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsc")
export default class BscController {
  @operation({
    summary: "Get Bsc",
  })
  @get()
  static getBsc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bsc",
  })
  @post("{id}")
  static createBsc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byu")
export default class ByuController {
  @operation({
    summary: "Get Byu",
  })
  @get()
  static getByu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Byu",
  })
  @post("{id}")
  static createByu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

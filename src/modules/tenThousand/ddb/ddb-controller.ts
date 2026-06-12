import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddb")
export default class DdbController {
  @operation({
    summary: "Get Ddb",
  })
  @get()
  static getDdb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ddb",
  })
  @post("{id}")
  static createDdb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

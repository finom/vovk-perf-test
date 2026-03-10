import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dew")
export default class DewController {
  @operation({
    summary: "Get Dew",
  })
  @get()
  static getDew = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dew",
  })
  @post("{id}")
  static createDew = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

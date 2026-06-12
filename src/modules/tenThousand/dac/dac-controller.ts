import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dac")
export default class DacController {
  @operation({
    summary: "Get Dac",
  })
  @get()
  static getDac = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dac",
  })
  @post("{id}")
  static createDac = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

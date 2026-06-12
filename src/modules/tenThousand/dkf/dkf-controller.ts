import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dkf")
export default class DkfController {
  @operation({
    summary: "Get Dkf",
  })
  @get()
  static getDkf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dkf",
  })
  @post("{id}")
  static createDkf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

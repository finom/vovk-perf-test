import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("acq")
export default class AcqController {
  @operation({
    summary: "Get Acq",
  })
  @get()
  static getAcq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Acq",
  })
  @post("{id}")
  static createAcq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

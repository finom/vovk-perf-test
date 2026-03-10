import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("inq")
export default class InqController {
  @operation({
    summary: "Get Inq",
  })
  @get()
  static getInq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Inq",
  })
  @post("{id}")
  static createInq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

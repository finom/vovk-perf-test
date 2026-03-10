import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cym")
export default class CymController {
  @operation({
    summary: "Get Cym",
  })
  @get()
  static getCym = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cym",
  })
  @post("{id}")
  static createCym = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lck")
export default class LckController {
  @operation({
    summary: "Get Lck",
  })
  @get()
  static getLck = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lck",
  })
  @post("{id}")
  static createLck = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czt")
export default class CztController {
  @operation({
    summary: "Get Czt",
  })
  @get()
  static getCzt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Czt",
  })
  @post("{id}")
  static createCzt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

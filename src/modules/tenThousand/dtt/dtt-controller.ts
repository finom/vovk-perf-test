import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dtt")
export default class DttController {
  @operation({
    summary: "Get Dtt",
  })
  @get()
  static getDtt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dtt",
  })
  @post("{id}")
  static createDtt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

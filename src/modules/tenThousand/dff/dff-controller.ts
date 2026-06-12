import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dff")
export default class DffController {
  @operation({
    summary: "Get Dff",
  })
  @get()
  static getDff = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dff",
  })
  @post("{id}")
  static createDff = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

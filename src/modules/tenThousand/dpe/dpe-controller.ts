import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpe")
export default class DpeController {
  @operation({
    summary: "Get Dpe",
  })
  @get()
  static getDpe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dpe",
  })
  @post("{id}")
  static createDpe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhs")
export default class DhsController {
  @operation({
    summary: "Get Dhs",
  })
  @get()
  static getDhs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dhs",
  })
  @post("{id}")
  static createDhs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dny")
export default class DnyController {
  @operation({
    summary: "Get Dny",
  })
  @get()
  static getDny = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dny",
  })
  @post("{id}")
  static createDny = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

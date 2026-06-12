import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("doo")
export default class DooController {
  @operation({
    summary: "Get Doo",
  })
  @get()
  static getDoo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Doo",
  })
  @post("{id}")
  static createDoo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

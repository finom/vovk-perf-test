import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bac")
export default class BacController {
  @operation({
    summary: "Get Bac",
  })
  @get()
  static getBac = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bac",
  })
  @post("{id}")
  static createBac = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

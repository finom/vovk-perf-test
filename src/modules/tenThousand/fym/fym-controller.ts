import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fym")
export default class FymController {
  @operation({
    summary: "Get Fym",
  })
  @get()
  static getFym = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fym",
  })
  @post("{id}")
  static createFym = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

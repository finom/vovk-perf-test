import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cu")
export default class CuController {
  @operation({
    summary: "Get Cu",
  })
  @get()
  static getCu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cu",
  })
  @post("{id}")
  static createCu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

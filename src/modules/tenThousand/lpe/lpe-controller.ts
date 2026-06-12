import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpe")
export default class LpeController {
  @operation({
    summary: "Get Lpe",
  })
  @get()
  static getLpe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lpe",
  })
  @post("{id}")
  static createLpe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

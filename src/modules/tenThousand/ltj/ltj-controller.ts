import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ltj")
export default class LtjController {
  @operation({
    summary: "Get Ltj",
  })
  @get()
  static getLtj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ltj",
  })
  @post("{id}")
  static createLtj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

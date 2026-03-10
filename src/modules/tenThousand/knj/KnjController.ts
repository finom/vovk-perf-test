import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("knj")
export default class KnjController {
  @operation({
    summary: "Get Knj",
  })
  @get()
  static getKnj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Knj",
  })
  @post("{id}")
  static createKnj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

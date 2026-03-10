import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjw")
export default class GjwController {
  @operation({
    summary: "Get Gjw",
  })
  @get()
  static getGjw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gjw",
  })
  @post("{id}")
  static createGjw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

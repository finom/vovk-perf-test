import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjj")
export default class GjjController {
  @operation({
    summary: "Get Gjj",
  })
  @get()
  static getGjj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gjj",
  })
  @post("{id}")
  static createGjj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

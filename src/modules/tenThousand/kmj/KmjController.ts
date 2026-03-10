import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmj")
export default class KmjController {
  @operation({
    summary: "Get Kmj",
  })
  @get()
  static getKmj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kmj",
  })
  @post("{id}")
  static createKmj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
